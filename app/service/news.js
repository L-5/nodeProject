const Service = require('egg').Service;

class NewsService extends Service {
  async list() {
    const {pageSize, serviceUrl} = this.config.news;
    const {data: idList} = await this.ctx.curl(`${serverUrl}/topstories.json`,{
      data: {

      }
    })
  }
}