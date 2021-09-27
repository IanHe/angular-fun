import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  minDisplayPage = 0;
  maxDisplayPage = 4;
  images: Image[] = [
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    }, {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/sun-shining-in-a-forest-picture-id901134626?b=1&k=20&m=901134626&s=170667a&w=0&h=SvvOoqv-fAHFKoX3-etEUtBXWbSh0oLYauE7B1_oycY='
    }, {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    }, {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/sun-shining-in-a-forest-picture-id901134626?b=1&k=20&m=901134626&s=170667a&w=0&h=SvvOoqv-fAHFKoX3-etEUtBXWbSh0oLYauE7B1_oycY='
    }, {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    }, {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/sun-shining-in-a-forest-picture-id901134626?b=1&k=20&m=901134626&s=170667a&w=0&h=SvvOoqv-fAHFKoX3-etEUtBXWbSh0oLYauE7B1_oycY='
    }, {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    }, {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/sun-shining-in-a-forest-picture-id901134626?b=1&k=20&m=901134626&s=170667a&w=0&h=SvvOoqv-fAHFKoX3-etEUtBXWbSh0oLYauE7B1_oycY='
    }, {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    }, {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/sun-shining-in-a-forest-picture-id901134626?b=1&k=20&m=901134626&s=170667a&w=0&h=SvvOoqv-fAHFKoX3-etEUtBXWbSh0oLYauE7B1_oycY='
    }, {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    }, {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/sun-shining-in-a-forest-picture-id901134626?b=1&k=20&m=901134626&s=170667a&w=0&h=SvvOoqv-fAHFKoX3-etEUtBXWbSh0oLYauE7B1_oycY='
    }, {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    }, {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/sun-shining-in-a-forest-picture-id901134626?b=1&k=20&m=901134626&s=170667a&w=0&h=SvvOoqv-fAHFKoX3-etEUtBXWbSh0oLYauE7B1_oycY='
    }, {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    },
    {
      title: 'At the Beach',
      url: 'https://media.istockphoto.com/photos/womans-legs-splashing-water-on-the-beach-picture-id1255493335?b=1&k=20&m=1255493335&s=170667a&w=0&h=ekkfjImQ-xzhgZ5bekZ_-vLpsQGCxlqVP3Ej_SuPb0E='
    }, {
      title: 'At the Forest',
      url: 'https://media.istockphoto.com/photos/sun-shining-in-a-forest-picture-id901134626?b=1&k=20&m=901134626&s=170667a&w=0&h=SvvOoqv-fAHFKoX3-etEUtBXWbSh0oLYauE7B1_oycY='
    }, {
      title: 'At the City',
      url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
    }, {
      title: 'At the Snow',
      url: 'https://images.unsplash.com/photo-1604537372136-89b3dae196e3?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHNub3d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
    }

  ]

  disablePrev(): string {
    return this.currentPage === 0 ? 'disabled' : '';
  }

  getPageLinkClass(pageNum: number): string[] {
    const classes = [];
    if (pageNum === this.currentPage) classes.push('active')
    return classes;
  }

  disableNext(): string {
    return this.currentPage === this.images.length - 1 ? 'disabled' : '';
  }

  clickPage(page: number): void {
    this.currentPage = page;
    this.calculateDisplayPages();
  }

  clickPrev(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.calculateDisplayPages();
    }
  }

  clickNext(): void {
    if (this.currentPage < this.images.length - 1) {
      this.currentPage++;
      this.calculateDisplayPages();
    }
  }

  displayPage(page: number): boolean {
    return page >= this.minDisplayPage && page <= this.maxDisplayPage;
  }

  private calculateDisplayPages(): void {
    const maxLen = this.images.length - 1;
    if (this.currentPage >= 0 && this.currentPage <= 2) {
      this.minDisplayPage = 0;
      this.maxDisplayPage = 4;
    } else if (this.currentPage <= maxLen && this.currentPage >= maxLen - 2) {
      this.maxDisplayPage = maxLen;
      this.minDisplayPage = (this.maxDisplayPage - 4) >= 0 ? (this.maxDisplayPage - 4) : 0;
    } else {
      this.minDisplayPage = this.currentPage - 2;
      this.maxDisplayPage = this.currentPage + 2;
    }
  }
}

interface Image {
  title: string,
  url: string
}
