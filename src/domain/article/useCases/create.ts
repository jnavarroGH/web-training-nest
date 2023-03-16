import { Article } from '@prisma/client';
import { CreateArticleDto } from '../../../interface/controller/article/create-article.dto';

export default interface Create {
  create(createArticleDto: CreateArticleDto): Promise<Article>;
}
