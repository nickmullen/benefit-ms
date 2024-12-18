"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("benefitGroup", [
      {"id": "d240ddc0-60a5-4028-9da6-d7339c631976"},
      {"id": "5cc489fb-fb8c-465c-bdbf-30fde18fd5ae"},
      {"id": "28c222c4-996b-4bb2-a17d-28786f592608"},
      {"id": "2fddc1e0-16ef-47d2-90ed-11784a25147f"},
      {"id": "a28cf2d2-f56b-4037-a119-154c79b8710e"},
      {"id": "7f03b441-f8d7-4d73-94e5-2e0cb4bf4d57"},
      {"id": "f1a818b0-3ed1-4d12-87c7-886197f94670"},
      {"id": "4b6655c3-0971-4935-96cf-403bb7d5f4cb"},
      {"id": "53112a97-e741-4d9b-911c-0b64216cedf8"},
      {"id": "51d52917-2bd3-4965-8a91-233f8d6f9a78"},
      {"id": "0f65e20b-8f3d-42ad-8bcc-e291eb463188"},
      {"id": "a015c65c-eb5e-4aad-ae50-03ec11952a95"},
      {"id": "9827e6e8-73be-4ab0-bff0-6e616ac7a6d8"},
      {"id": "f30a7baf-ccd8-4573-a896-b7db556171ed"},
      {"id": "c56c6973-d018-4ef9-9668-820c2545c04d"},
      {"id": "68dc4341-4685-45d1-bfb6-271665f3fb99"},
      {"id": "bf78e662-c27a-4f68-83d5-f5ab0e0bc126"},
      {"id": "1071f71e-4e06-468b-ae85-9d9b3a00e54b"},
      {"id": "a78ea060-8780-4998-96a1-df463a554508"},
      {"id": "106cc7f1-3147-4c80-a21a-35fe64b90314"},
      {"id": "4e459e29-dfda-4c59-bc7d-92d3a870f2db"},
      {"id": "a67b0221-c757-4ccd-b98f-b8f4abfc7c1c"},
      {"id": "3dfcbe04-579d-4a5c-a1ec-8a8c3d647f50"},
      {"id": "b30c866b-d6b5-4835-84a6-5805ce959bc0"},
      {"id": "cd7ae6e9-5908-4ad8-932c-2a1a17d163cf"},
      {"id": "fe0c13b0-cf70-4372-b5d6-84f7e47a1b8c"},
      {"id": "d3732e94-64e4-4035-970e-05e107b05083"},
      {"id": "ac14696c-da8f-4f54-89db-d3a6457b6065"},
      {"id": "16586087-0594-4494-ba04-caedbf6dfb15"}
    ]);
    await queryInterface.bulkInsert("translation", [
      {"entityId": "d240ddc0-60a5-4028-9da6-d7339c631976",
        "type": "name",
        "language": "en",
        "value":"General Consultations"
      },
      {"entityId": "d240ddc0-60a5-4028-9da6-d7339c631976",
        "type": "name",
        "language": "ar",
        "value":"استشارات عامة"
      },
      {"entityId": "d240ddc0-60a5-4028-9da6-d7339c631976",
        "type": "name",
        "language": "fr",
        "value":"General Consultations générales"
      },

      {"entityId": "5cc489fb-fb8c-465c-bdbf-30fde18fd5ae",
        "type": "name",
        "language": "en",
        "value":"Specialist Consultations"
      },
      {"entityId": "5cc489fb-fb8c-465c-bdbf-30fde18fd5ae",
        "type": "name",
        "language": "ar",
        "value":"استشارات متخصصة"
      },
      {"entityId": "5cc489fb-fb8c-465c-bdbf-30fde18fd5ae",
        "type": "name",
        "language": "fr",
        "value":"Consultations spécialisées"
      },


      {"entityId": "16586087-0594-4494-ba04-caedbf6dfb15",
        "type": "name",
        "language": "en",
        "value": "Prescribed Medications (Acute and OTC Medications)"
      },
      {"entityId": "16586087-0594-4494-ba04-caedbf6dfb15",
        "type": "name",
        "language": "ar",
        "value":"الأدوية الموصوفة العامة"
      },
      {"entityId": "16586087-0594-4494-ba04-caedbf6dfb15",
        "type": "name",
        "language": "fr",
        "value":"Médicaments prescrits (médicaments aigus et en vente libre)"
      },

      {"entityId": "28c222c4-996b-4bb2-a17d-28786f592608",
        "type": "name",
        "language": "en",
        "value":"Prescribed Medications for Chronic Illness"
      },
      {"entityId": "28c222c4-996b-4bb2-a17d-28786f592608",
        "type": "name",
        "language": "ar",
        "value":"الأدوية الموصوفة للأمراض المزمنة"
      },
      {"entityId": "28c222c4-996b-4bb2-a17d-28786f592608",
        "type": "name",
        "language": "fr",
        "value":"Médicaments prescrits pour les maladies chroniques"
      },
      {"entityId": "2fddc1e0-16ef-47d2-90ed-11784a25147f",
        "type": "name",
        "language": "en",
        "value":"Telemedicine and Teletherapy"
      },
      {"entityId": "2fddc1e0-16ef-47d2-90ed-11784a25147f",
        "type": "name",
        "language": "ar",
        "value":"الاستشارات الطبية والنفسية عن بُعد"
      },
      {"entityId": "2fddc1e0-16ef-47d2-90ed-11784a25147f",
        "type": "name",
        "language": "fr",
        "value":"Télémédecine et téléméthérapie"
      },
      {"entityId": "a28cf2d2-f56b-4037-a119-154c79b8710e",
        "type": "name",
        "language": "en",
        "value":"Road Ambulance Services"
      },
      {"entityId": "a28cf2d2-f56b-4037-a119-154c79b8710e",
        "type": "name",
        "language": "ar",
        "value":"خدمات الإسعاف"
      },
      {"entityId": "a28cf2d2-f56b-4037-a119-154c79b8710e",
        "type": "name",
        "language": "fr",
        "value":"Services d'ambulance routière"
      },
      {"entityId": "7f03b441-f8d7-4d73-94e5-2e0cb4bf4d57",
        "type": "name",
        "language": "en",
        "value":"Inpatient Services"
      },
      {"entityId": "7f03b441-f8d7-4d73-94e5-2e0cb4bf4d57",
        "type": "name",
        "language": "ar",
        "value":"خدمات المرضى الداخلي"
      },
      {"entityId": "7f03b441-f8d7-4d73-94e5-2e0cb4bf4d57",
        "type": "name",
        "language": "fr",
        "value":"Services d'hospitalisation"
      },
      {"entityId": "f1a818b0-3ed1-4d12-87c7-886197f94670",
        "type": "name",
        "language": "en",
        "value":"Basic Lab Tests (Haematology, Chemistry and Microbiology)"
      },
      {"entityId": "f1a818b0-3ed1-4d12-87c7-886197f94670",
        "type": "name",
        "language": "ar",
        "value":"التحاليل الأساسية (اختبارات الدم، والميكروبيولوجي)"
      },
      {"entityId": "f1a818b0-3ed1-4d12-87c7-886197f94670",
        "type": "name",
        "language": "fr",
        "value":"Tests de laboratoire de base (hématologie, chimie et microbiologie)"
      },
      {"entityId": "4b6655c3-0971-4935-96cf-403bb7d5f4cb",
        "type": "name",
        "language": "en",
        "value":"Basic Diagnostic Imaging and Procedures"
      },
      {"entityId": "4b6655c3-0971-4935-96cf-403bb7d5f4cb",
        "type": "name",
        "language": "ar",
        "value":"الأشعة والإجراءات الأساسية"
      },
      {"entityId": "4b6655c3-0971-4935-96cf-403bb7d5f4cb",
        "type": "name",
        "language": "fr",
        "value":"Imagerie diagnostique de base et procédures"
      },
      {"entityId": "53112a97-e741-4d9b-911c-0b64216cedf8",
        "type": "name",
        "language": "en",
        "value":"Advanced Laboratory Investigations/Pathology"
      },
      {"entityId": "53112a97-e741-4d9b-911c-0b64216cedf8",
        "type": "name",
        "language": "ar",
        "value":"التحاليل المتقدمة والباثولوجي"
      },
      {"entityId": "53112a97-e741-4d9b-911c-0b64216cedf8",
        "type": "name",
        "language": "fr",
        "value":"Investigations de laboratoire avancées / Pathologie"
      },
      {"entityId": "51d52917-2bd3-4965-8a91-233f8d6f9a78",
        "type": "name",
        "language": "en",
        "value":"Advanced Diagnostic Imaging and Procedures"
      },
      {"entityId": "51d52917-2bd3-4965-8a91-233f8d6f9a78",
        "type": "name",
        "language": "ar",
        "value":"الأشعة والإجراءات المتقدمة"
      },
      {"entityId": "51d52917-2bd3-4965-8a91-233f8d6f9a78",
        "type": "name",
        "language": "fr",
        "value":"Imagerie diagnostique avancée et procédures"
      },
      {"entityId": "0f65e20b-8f3d-42ad-8bcc-e291eb463188",
        "type": "name",
        "language": "en",
        "value":"Surgery and Anaesthesia"
      },
      {"entityId": "0f65e20b-8f3d-42ad-8bcc-e291eb463188",
        "type": "name",
        "language": "ar",
        "value":"الجراحة والتخدير"
      },
      {"entityId": "0f65e20b-8f3d-42ad-8bcc-e291eb463188",
        "type": "name",
        "language": "fr",
        "value":"Chirurgie et anesthésie"
      },
      {"entityId": "a015c65c-eb5e-4aad-ae50-03ec11952a95",
        "type": "name",
        "language": "en",
        "value":"Intensive Care Unit"
      },
      {"entityId": "a015c65c-eb5e-4aad-ae50-03ec11952a95",
        "type": "name",
        "language": "ar",
        "value":"الرعاية المركزة"
      },
      {"entityId": "a015c65c-eb5e-4aad-ae50-03ec11952a95",
        "type": "name",
        "language": "fr",
        "value":"Unité de soins intensifs"
      },
      {"entityId": "9827e6e8-73be-4ab0-bff0-6e616ac7a6d8",
        "type": "name",
        "language": "en",
        "value":"Basic and Advanced Eye Tests"
      },
      {"entityId": "9827e6e8-73be-4ab0-bff0-6e616ac7a6d8",
        "type": "name",
        "language": "ar",
        "value":"فحوصات العيون الأساسية والمتقدمة"
      },
      {"entityId": "9827e6e8-73be-4ab0-bff0-6e616ac7a6d8",
        "type": "name",
        "language": "fr",
        "value":"Tests oculaires de base et avancés"
      },
      {"entityId": "f30a7baf-ccd8-4573-a896-b7db556171ed",
        "type": "name",
        "language": "en",
        "value":"Optical Lenses and Frames"
      },
      {"entityId": "f30a7baf-ccd8-4573-a896-b7db556171ed",
        "type": "name",
        "language": "ar",
        "value":"عدسات ونظارات طبية"
      },
      {"entityId": "f30a7baf-ccd8-4573-a896-b7db556171ed",
        "type": "name",
        "language": "fr",
        "value":"Lentilles et montures optiques"
      },

      {"entityId": "c56c6973-d018-4ef9-9668-820c2545c04d",
        "type": "name",
        "language": "en",
        "value":"Dental Care"
      },
      {"entityId": "c56c6973-d018-4ef9-9668-820c2545c04d",
        "type": "name",
        "language": "ar",
        "value":"خدمات الأسنان"
      },
      {"entityId": "c56c6973-d018-4ef9-9668-820c2545c04d",
        "type": "name",
        "language": "fr",
        "value":"Soins dentaires"
      },

      {"entityId": "68dc4341-4685-45d1-bfb6-271665f3fb99",
        "type": "name",
        "language": "en",
        "value":"Mental and Behavioural Health Consultations/Therapy"
      },
      {"entityId": "68dc4341-4685-45d1-bfb6-271665f3fb99",
        "type": "name",
        "language": "ar",
        "value":"استشارات الصحة النفسية والسلوكية"
      },
      {"entityId": "68dc4341-4685-45d1-bfb6-271665f3fb99",
        "type": "name",
        "language": "fr",
        "value":"Consultations/Thérapie en santé mentale et comportementale"
      },
      {"entityId": "bf78e662-c27a-4f68-83d5-f5ab0e0bc126",
        "type": "name",
        "language": "en",
        "value":"Weekly Gym Access"
      },
      {"entityId": "bf78e662-c27a-4f68-83d5-f5ab0e0bc126",
        "type": "name",
        "language": "ar",
        "value":"الذهاب للجيم أسبوعيًا"
      },
      {"entityId": "bf78e662-c27a-4f68-83d5-f5ab0e0bc126",
        "type": "name",
        "language": "fr",
        "value":"Accès hebdomadaire à la salle de sport"
      },
      {"entityId": "1071f71e-4e06-468b-ae85-9d9b3a00e54b",
        "type": "name",
        "language": "en",
        "value":"Spa Facials or Body Massage"
      },
      {"entityId": "1071f71e-4e06-468b-ae85-9d9b3a00e54b",
        "type": "name",
        "language": "ar",
        "value":"العناية بالوجه أو السبا"
      },
      {"entityId": "1071f71e-4e06-468b-ae85-9d9b3a00e54b",
        "type": "name",
        "language": "fr",
        "value":"Soins du visage ou massage corporel au spa"
      },
      {"entityId": "a78ea060-8780-4998-96a1-df463a554508",
        "type": "name",
        "language": "en",
        "value":"Antenatal Care & Delivery"
      },
      {"entityId": "a78ea060-8780-4998-96a1-df463a554508",
        "type": "name",
        "language": "ar",
        "value":"رعاية ما قبل الولادة والولادة"
      },
      {"entityId": "a78ea060-8780-4998-96a1-df463a554508",
        "type": "name",
        "language": "fr",
        "value":"Soins prénataux et accouchement"
      },
      {"entityId": "106cc7f1-3147-4c80-a21a-35fe64b90314",
        "type": "name",
        "language": "en",
        "value":"Fertility and Reproductive Health Tests"
      },
      {"entityId": "106cc7f1-3147-4c80-a21a-35fe64b90314",
        "type": "name",
        "language": "ar",
        "value":"اختبارات الخصوبة والصحة الإنجابية"
      },
      {"entityId": "106cc7f1-3147-4c80-a21a-35fe64b90314",
        "type": "name",
        "language": "fr",
        "value":"Tests de fertilité et de santé reproductive"
      },
      {"entityId": "4e459e29-dfda-4c59-bc7d-92d3a870f2db",
        "type": "name",
        "language": "en",
        "value":"Hospital and Home Immunizations"
      },
      {"entityId": "4e459e29-dfda-4c59-bc7d-92d3a870f2db",
        "type": "name",
        "language": "ar",
        "value":"التطعيمات"
      },
      {"entityId": "4e459e29-dfda-4c59-bc7d-92d3a870f2db",
        "type": "name",
        "language": "fr",
        "value":"Vaccinations hospitalières et à domicile"
      },
      {"entityId": "a67b0221-c757-4ccd-b98f-b8f4abfc7c1c",
        "type": "name",
        "language": "en",
        "value":"Family Planning"
      },
      {"entityId": "a67b0221-c757-4ccd-b98f-b8f4abfc7c1c",
        "type": "name",
        "language": "ar",
        "value":"تنظيم الأسرة"
      },
      {"entityId": "a67b0221-c757-4ccd-b98f-b8f4abfc7c1c",
        "type": "name",
        "language": "fr",
        "value":"Planification familiale"
      },
      {"entityId": "3dfcbe04-579d-4a5c-a1ec-8a8c3d647f50",
        "type": "name",
        "language": "en",
        "value":"Emergency Air Ambulance Service"
      },
      {"entityId": "3dfcbe04-579d-4a5c-a1ec-8a8c3d647f50",
        "type": "name",
        "language": "ar",
        "value":"خدمات الإسعاف الجوي الطارئة"
      },
      {"entityId": "3dfcbe04-579d-4a5c-a1ec-8a8c3d647f50",
        "type": "name",
        "language": "fr",
        "value":"Service d'ambulance aérienne d'urgence"
      },
      {"entityId": "b30c866b-d6b5-4835-84a6-5805ce959bc0",
        "type": "name",
        "language": "en",
        "value":"Care in a Neonatal/Special Baby Care Unit"
      },
      {"entityId": "b30c866b-d6b5-4835-84a6-5805ce959bc0",
        "type": "name",
        "language": "ar",
        "value":"رعاية الأطفال حديثي الولادة والأطفال"
      },
      {"entityId": "b30c866b-d6b5-4835-84a6-5805ce959bc0",
        "type": "name",
        "language": "fr",
        "value":"Soins dans une unité de soins néonatals/spéciale pour bébés"
      },
      {"entityId": "cd7ae6e9-5908-4ad8-932c-2a1a17d163cf",
        "type": "name",
        "language": "en",
        "value":"Physical/Speech Therapy Sessions"
      },
      {"entityId": "cd7ae6e9-5908-4ad8-932c-2a1a17d163cf",
        "type": "name",
        "language": "ar",
        "value":"جلسات العلاج الطبيعي والتخاطب"
      },
      {"entityId": "cd7ae6e9-5908-4ad8-932c-2a1a17d163cf",
        "type": "name",
        "language": "fr",
        "value":"Séances de thérapie physique/orthophonie"
      },
      {"entityId": "fe0c13b0-cf70-4372-b5d6-84f7e47a1b8c",
        "type": "name",
        "language": "en",
        "value":"Physiotherapy Care"
      },
      {"entityId": "fe0c13b0-cf70-4372-b5d6-84f7e47a1b8c",
        "type": "name",
        "language": "ar",
        "value":"العلاج الطبيعي"
      },
      {"entityId": "fe0c13b0-cf70-4372-b5d6-84f7e47a1b8c",
        "type": "name",
        "language": "fr",
        "value":"Soins de physiothérapie"
      },
      {"entityId": "d3732e94-64e4-4035-970e-05e107b05083",
        "type": "name",
        "language": "en",
        "value":"Dialysis"
      },
      {"entityId": "d3732e94-64e4-4035-970e-05e107b05083",
        "type": "name",
        "language": "ar",
        "value":"غسيل الكلى"
      },
      {"entityId": "d3732e94-64e4-4035-970e-05e107b05083",
        "type": "name",
        "language": "fr",
        "value":"Dialyse"
      },
      {"entityId": "ac14696c-da8f-4f54-89db-d3a6457b6065",
        "type": "name",
        "language": "en",
        "value":"After Demise Compensation"
      },
      {"entityId": "ac14696c-da8f-4f54-89db-d3a6457b6065",
        "type": "name",
        "language": "ar",
        "value":"تعويضات ما بعد الوفاة"
      },
      {"entityId": "ac14696c-da8f-4f54-89db-d3a6457b6065",
        "type": "name",
        "language": "fr",
        "value":"Compensation après le décès"
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("benefitGroup", null, {});
  }
};
