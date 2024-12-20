import { TranslationRecord } from "../models/translation";
import LOG from "../library/logging";

class ReadTranslations {
  entityId: string;
  type: string

  constructor(entityId: string, type: string) {
    this.entityId = entityId;
    this.type = type;
  };

  public async find() {
    // Find the benefit record, and then the associated translations
    return await TranslationRecord.findAll(
      { where: { entityId: this.entityId, type: this.type } }
    );
  };
};

export { ReadTranslations };
