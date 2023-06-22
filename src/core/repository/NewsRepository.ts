import { News } from '../model/news/News';
import { NewsDto, convertToNews } from '../model/news/NewsDto';
import { executeGet } from '../api/ApiResultWrapper';

export const fetchNews = () =>
  executeGet<NewsDto[], News[]>(`news`, (result: any): News[] =>
    result.data
      .map((dto: NewsDto) => convertToNews(dto))
      .filter((news: News) => news.thumbnail !== ''),
  );
