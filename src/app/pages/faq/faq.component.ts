import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  cards = [
    {
      ask: 'Combien de temps va prendre la réalisation de mon site internet?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. quinoa nesciunt laborum eiusmod. Brunch3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origincoffee nulla assumenda shoreditch eolf moon officia aute, noncupidatatskateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it.',
      id: 'ask1'  
    },
    {
      ask: 'Pouvez-vous améliorer mon site qui est déjà en ligne ?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. quinoa nesciunt laborum eiusmod. Brunch3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origincoffee nulla assumenda shoreditch eolf moon officia aute, noncupidatatskateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it.',
      id: 'ask2'  
    },
    {
      ask: 'Qu\'est-ce qu\'il faut pour la réalisation de mon site internet?',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. quinoa nesciunt laborum eiusmod. Brunch3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origincoffee nulla assumenda shoreditch eolf moon officia aute, noncupidatatskateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it.',
      id: 'ask3'  
    },
    {
      ask: 'Card Title 4',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. quinoa nesciunt laborum eiusmod. Brunch3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origincoffee nulla assumenda shoreditch eolf moon officia aute, noncupidatatskateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it.',
      id: 'ask5'  
    },
    {
      ask: 'Card Title 5',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. quinoa nesciunt laborum eiusmod. Brunch3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origincoffee nulla assumenda shoreditch eolf moon officia aute, noncupidatatskateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it.',
      id: 'ask6'  
    },
    {
      ask: 'Card Title 6',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. quinoa nesciunt laborum eiusmod. Brunch3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origincoffee nulla assumenda shoreditch eolf moon officia aute, noncupidatatskateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it.',
      id: 'ask7'  
    },
    {
      ask: 'Card Title 7',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. quinoa nesciunt laborum eiusmod. Brunch3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origincoffee nulla assumenda shoreditch eolf moon officia aute, noncupidatatskateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it.',
      id: 'ask8'  
    },
    {
      ask: 'Card Title 8',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. quinoa nesciunt laborum eiusmod. Brunch3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origincoffee nulla assumenda shoreditch eolf moon officia aute, noncupidatatskateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it.',
      id: 'ask9'  
    },
    {
      ask: 'Card Title 9',
      answer: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. quinoa nesciunt laborum eiusmod. Brunch3 wolf moon tempor, sunt aliqua put a bird on it squidsingle-origincoffee nulla assumenda shoreditch eolf moon officia aute, noncupidatatskateboard dolor brunch. Food truck quinoa nesciunt laborumeiusmod.Brunch 3 wolf moon tempor, sunt aliqua put a bird on it.',
      id: 'ask789'  
    },
  ];

  onAnimationStateChange(state: any) {
    console.log(state);
  }

  constructor() { }

  ngOnInit() {
  }

}
