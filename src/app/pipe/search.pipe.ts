import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items:any[],searchText:string):any[]{
    if(!items) return [];
    if(!searchText)return items;
    return items.filter(item=>{return item.title.toLowerCase().includes(searchText.toLowerCase())||item.description.toLowerCase().includes(searchText.toLowerCase())});
  }

}
