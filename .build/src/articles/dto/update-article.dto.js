"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
const create_article_dto_1 = require("./create-article.dto");
class UpdateArticleDto extends swagger_1.PartialType(create_article_dto_1.CreateArticleDto) {
}
exports.UpdateArticleDto = UpdateArticleDto;
//# sourceMappingURL=update-article.dto.js.map