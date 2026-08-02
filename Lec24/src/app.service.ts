import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getWishByLang(lang: string) {
    const wishes = {
      en: {
        wish: "I wish to travel the world.",
      },
      ru: {
        wish: "Я хочу путешествовать по миру.",
      },
      ger: {
        wish: "Ich möchte die Welt bereisen.",
      },
      fr: {
        wish: "Je souhaite voyager à travers le monde.",
      },
      it: {
        wish: "Voglio viaggiare per il mondo.",
      }
    }
    return wishes[lang];
  }
}
