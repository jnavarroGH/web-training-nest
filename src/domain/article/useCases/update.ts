import { Article } from '@prisma/client';
import { UpdateArticleDto } from '../../../interface/controller/article/update-article.dto';

export default interface Update {
  update(updateArticleDto: UpdateArticleDto): Promise<Article>;
}
