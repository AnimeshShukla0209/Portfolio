import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'E-commerce Website',
      summary: "An E-commerce website that allows you to order anything from your local marketplaces . You can add to your cart and do the payment through interactive dashboard .",
      description: "This project is a full-featured E-commerce website designed to connect users with local marketplaces. Customers can browse products, add items to their cart, and make secure online payments through an interactive dashboard. The platform also includes vendor dashboards for managing products, images, and pricing. With a user-friendly interface and responsive design, the system ensures a seamless shopping experience across devices. The backend is integrated with a secure database for handling orders, user authentication, and product management, making it scalable and reliable for real-world use.",
      projectLink: 'https://github.com/AnimeshShukla0209/E-Commerce-app',
      tags: [Tag.ANGULAR, Tag.JAVASCRIPT, Tag.SQL, Tag.TYPESCRIPT],
      pictures: ["../../assets/E_commerce_1.png", "../../assets/E_commerce_2.png"]
    }

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('Animesh | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
