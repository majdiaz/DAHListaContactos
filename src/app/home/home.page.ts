import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public contacts = [];
  constructor() {

    this.contacts.push({
      image: 'https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.0-9/70454420_2535210163184375_1833416118690119680_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=z1bjmR-3lqEAX_Qjkfl&_nc_ht=scontent.fgdl5-1.fna&oh=41b16f3d1a60ca7b745210bb8d93d42e&oe=5FC9B756',
      name: 'Miguel Arciniega',
      number: '3111216030',
      status: 'El amor está compuesto por un alma habitando dos cuerpos.'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-3.fna.fbcdn.net/v/t1.0-9/26230616_1995073987175667_2910250823637074653_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=JrZMAN1mRdEAX_20rtr&_nc_ht=scontent.fgdl5-3.fna&oh=c2fd2b435019aed9098b467204c6e32e&oe=5FC7BC14',
      name: 'Edwin Arellano',
      number: '3111180994',
      status: 'Un náufrago feliz sería, si tu boca fuese el mar y yo un marinero a la deriva.'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.0-9/61532630_2633406320021396_86107793567776768_o.jpg?_nc_cat=109&ccb=2&_nc_sid=174925&_nc_ohc=u0VIoWMiia8AX-V46kc&_nc_ht=scontent.fgdl5-1.fna&oh=e048fcf22056a63aba7e4b13f0ddc478&oe=5FC7FA8A',
      name: 'David Medrano',
      number: '3111740340',
      status: 'Puede que tu nombre no sea Alicia, pero eres maravillosa.'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-3.fna.fbcdn.net/v/t1.0-9/122172796_2309567409189670_5769155977268019742_n.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=M6XqtyISbIkAX-u6z-m&_nc_ht=scontent.fgdl5-3.fna&oh=8d303a0e7094dd0c8e848c6fb5db7779&oe=5FC7FD6B',
      name: 'Adriana Flores',
      number: '3112358516',
      status: 'Tus ojos son como dos lunas, y yo siempre quise viajar a la Luna. Ahora entiendo mi deseo de ser astronauta.'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.0-9/37976085_1751232728259977_4073077156500996096_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=RpMJ4de17FAAX-s8wlw&_nc_ht=scontent.fgdl5-1.fna&oh=5eef96fe487a3dc3bb9eb2c6abedced2&oe=5FC8ABAA',
      name: 'Andrés Haro',
      number: '3111656715',
      status: 'Y como siempre se lo digo a mis amigos, conocerte fue casualidad, pero fue lo mejor de mi vida.'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.0-9/117764672_4803744549650998_314487972644915194_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=3nxY8cT9rzkAX8Ph9fB&_nc_ht=scontent.fgdl5-1.fna&oh=0a8d61d3873f6429402945d0897536e4&oe=5FC68559',
      name: 'Diana Hernández',
      number: '3113830931',
      status: 'No cambiaría un minuto de ayer contigo por cien años de vida sin ti.'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-3.fna.fbcdn.net/v/t1.0-9/95567560_3189793691044799_3905805188392288256_o.jpg?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_ohc=oopjdM6ry68AX-j_-UT&_nc_oc=AQkd-Wd2CW8sQ98wrmb9sMjeBmITNNAbkOEacHxDsUTeu65SAdVG6LjRPGzeuO-PyOg&_nc_ht=scontent.fgdl5-3.fna&oh=fbd7450628e993b14f7251672ec8d5c6&oe=5FC755A4',
      name: 'Dani *.*',
      number: '3111436719',
      status: 'I love Martin Jimenez'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.0-9/84879865_189551802362155_6240268605536075776_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=0m7xY59rA4EAX9QI1Ri&_nc_ht=scontent.fgdl5-1.fna&oh=64f7b839fa9385217c1319774d0212ec&oe=5FC8D17E',
      name: 'Daniel High',
      number: '3111226348',
      status: 'Préstame el tiempo que te sobre, y lo gastaré en hacerte la persona más feliz del planeta'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.0-9/18893011_1390497534343801_3857055526515973846_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=eHO4U2bOQhMAX-k7XCb&_nc_ht=scontent.fgdl5-1.fna&oh=4ea5fa40ea62aea0c92c227316f9140d&oe=5FC80648',
      name: 'Missael Lopez',
      number: '3112636307',
      status: 'Mi amor por ti es para siempre, así que quédate conmigo hasta siempre.'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-1.fna.fbcdn.net/v/t1.0-9/62465066_2304967193050654_788850381194002432_n.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=HgxVwjdlk4IAX8Too0y&_nc_ht=scontent.fgdl5-1.fna&oh=e8e8e41a0ec8664a4f0a9b06f0d10025&oe=5FC8F74B',
      name: 'Martín López',
      number: '6871941615',
      status: 'Cada vez que pienso en la felicidad tu rostro vuelve a mi cabeza.'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-3.fna.fbcdn.net/v/t1.0-9/90341780_514487726172664_7607964541099442176_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=ZxQfTRdA48cAX9JjQ7o&_nc_ht=scontent.fgdl5-3.fna&oh=664573115e58286e91f0cf3960b61756&oe=5FC8F584',
      name: 'Jonathan Lopez',
      number: '3113501207',
      status: 'El amor es pura poesía de una persona que no hace versos sino que los da.'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/118888790_3937855319574648_7067877926251867221_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=9zh2dyxhag0AX87oQ6N&_nc_ht=scontent.fgdl5-2.fna&oh=8c97bf76a8e2b657d149bbad09bce910&oe=5FC79561',
      name: 'Jose Martinez',
      number: '3112008161',
      status: 'Salgamos juntos, yo invito a los besos.'
    });

    this.contacts.push({
      image: 'https://scontent.fgdl5-3.fna.fbcdn.net/v/t1.0-9/118884911_3456660367725793_1801828377787176896_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=gBxHj3KD0WgAX9N4Z_9&_nc_ht=scontent.fgdl5-3.fna&oh=92cac024d4d1cc52facfb6d354113676&oe=5FC960E4',
      name: 'Enrique Ortiz',
      number: '3112576460',
      status: 'Me encanta cerrar los ojos y ser capaz de sentirte conmigo aún en la distancia, es tu amor lo que lo hace posible.'
    });

  }

}
