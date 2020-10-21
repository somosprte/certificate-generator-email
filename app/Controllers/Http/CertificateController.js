"use strict";

const FileSystem = use("fs");
const CSVParser = use("csv-parser");
const Helpers = use("Helpers");
const PDFDocument = use("pdfkit");
const Slugify = use("slugify");
const CPF = use('gerador-validador-cpf')
const Mail = use('Mail')
const Env = use('Env')


const RalewayRegular = Helpers.resourcesPath("fonts/Raleway-Regular.ttf");
const RalewayBold = Helpers.resourcesPath("fonts/Raleway-Bold.ttf");

class CertificateController {
  async store({ request }) {
    const {csv, jpg, email} = request.all();
    console.log("CONSOLE");
    console.log(csv);
    console.log(jpg);
    console.log(email);
    // Read CSV
    const root = Helpers.appRoot();
    const CertificateImage = Helpers.resourcesPath(
      `assets/${jpg}`
    );

    FileSystem.createReadStream(`${root}/${csv}`)
      .pipe(CSVParser())
      .on("data", async (data) => {
        const filename = Slugify(`${data.name.toLowerCase()}-${data.document}`);
        const documentFormatted = CPF.format(data.document)

        const doc = new PDFDocument({
          info: {
            Title: `${data.event} - ${data.name}`,
          },
          layout: "landscape",
        });
        const filepath = Helpers.tmpPath(`${filename}.pdf`)
        doc.pipe(
          FileSystem.createWriteStream(filepath)
        );
        doc.image(CertificateImage, 0, 0, {
          width: doc.page.width,
          height: doc.page.height,
        });
        doc.registerFont("RalewayRegular", RalewayRegular);
        doc.registerFont("RalewayBold", RalewayBold);
        doc.font("RalewayBold").fontSize(20);
        doc.fillColor('#CEDC01')
        doc.text(
          `${data.name.toUpperCase()} - ${documentFormatted}`,
          45,
          315,
        );
        doc.end();

        if (email === true)
        {
          await Mail.send('emails.certificate', data,  (message) => {
            message
              .to(data.email)
              .from(Env.getOrFail('EMAIL_FROM'), Env.getOrFail('EMAIL_FROM_NAME'))
              .subject(Env.getOrFail('EMAIL_SUBJECT'))
              .attach(filepath)
          })
        }
      });
  }
}

module.exports = CertificateController;
