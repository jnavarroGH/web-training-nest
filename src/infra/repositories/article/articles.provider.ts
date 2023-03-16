import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from '../../../interface/controller/article/create-article.dto';
import { UpdateArticleDto } from '../../../interface/controller/article/update-article.dto';
import { PrismaService } from '../../database/prisma/prisma.service';

@Injectable()
export class ArticlesProvider {
  constructor(private prisma: PrismaService) {}

  create(createArticleDto: CreateArticleDto) {
    // return 'This action adds a new article';
    return this.prisma.article.create({ data: createArticleDto });
  }

  findAll() {
    // return `This action returns all articles`;
    return this.prisma.article.findMany({ where: { published: true } });
  }

  findDrafts() {
    return this.prisma.article.findMany({ where: { published: false } });
  }

  findOne(id: number) {
    // return `This action returns a #${id} article`;
    return this.prisma.article.findUnique({ where: { id } });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    // return `This action updates a #${id} article`;
    return this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  remove(id: number) {
    // return `This action removes a #${id} article`;
    return this.prisma.article.delete({ where: { id } });
  }
}