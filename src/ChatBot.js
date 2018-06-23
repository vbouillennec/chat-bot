class ChatBot {
  constructor() {
    this.equipe = null;
    this.joueur = null;
  }

  getResponse(message) {
    switch (message) {
      case 'bonjour':
        return 'bonjour';
      case 'salut':
        return 'salut';
      case 'ca va ?':
        return 'oui, et vous ?';
      case 'qui es tu ?':
        return 'je suis un bot';
      case 'coucou':
        return 'coucou toi';
      case 'quel age a tu ?':
        return 'je ne sais pas';
      case 'lol':
        return 'tu es drole !';
      case 'bien':
        return 'excellent !';
      case 'très bien':
        return 'excellent !';
      case 'la forme ?':
        return 'oui';
      case 'oui':
        return 'OK';
      case 'la France':
        this.equipe = 'la France';
        return 'oui, moi aussi je suis pour la France !\nQuel est votre joueur préféré ?';
      case 'la france':
        this.equipe = 'la France';
        return 'oui, moi aussi je suis pour la France !\nQuel est votre joueur préféré ?';
      case 'france':
        this.equipe = 'la France';
        return 'oui, moi aussi je suis pour la France !\nQuel est votre joueur préféré ?';
      case 'France':
        this.equipe = 'la France';
        return 'oui, moi aussi je suis pour la France !\nQuel est votre joueur préféré ?';
      case 'le Brésil':
        this.equipe = 'le Brésil';
        return "ah vous etes donc pour " + this.equipe + ", je ne pense pas que cette équipe va gagner\nQuel est votre joueur préféré ?";
      case "l'Allemagne":
        this.equipe = "l'Allemagne";
        return "ah vous etes donc pour " + this.equipe + ", je ne pense pas que cette équipe va gagner\nQuel est votre joueur préféré ?";
      case "l'Espagne":
        this.equipe = "l'Espagne";
        return "ah vous etes donc pour " + this.equipe + ", je ne pense pas que cette équipe va gagner\nQuel est votre joueur préféré ?";
      case 'le Portugal':
        this.equipe = 'le Portugal';
        return "ah vous etes donc pour " + this.equipe + ", je ne pense pas que cette équipe va gagner\nQuel est votre joueur préféré ?";
      case 'Griezman':
        this.joueur = 'Griezman';
        return "C'est vrai que " + this.joueur + " est un excellent joueur, je l'aime bien aussi";
      case 'Pogba':
        this.joueur = 'Pogba';
        return "C'est vrai que " + this.joueur + " est un excellent joueur, je l'aime bien aussi";
      case 'Ronaldo':
        this.joueur = 'Ronaldo';
        return "C'est vrai que " + this.joueur + " est un excellent joueur, je l'aime bien aussi";
      case 'Girou':
        this.joueur = 'Girou';
        return "C'est vrai que " + this.joueur + " est un excellent joueur, je l'aime bien aussi";
      case 'Pogba':
        this.joueur = 'Pogba';
        return "C'est vrai que " + this.joueur + " est un excellent joueur, je l'aime bien aussi";
      case 'Neymar':
        this.joueur = 'Neymar';
        return "C'est vrai que " + this.joueur + " est un excellent joueur, je l'aime bien aussi";
      case 'Mbappe':
        this.joueur = 'Mbappe';
        return "C'est vrai que " + this.joueur + " est un excellent joueur, je l'aime bien aussi";
      case 'Messi':
        this.joueur = 'Messi';
        return "C'est vrai que " + this.joueur + " est un excellent joueur, je l'aime bien aussi";
      case 'Modric':
        this.joueur = 'Modric';
        return "C'est vrai que " + this.joueur + " est un excellent joueur, je l'aime bien aussi";
      default:
        return 'je n\'ai pas compris, pouvez-vous reformuler ?';
    }
  }
}

export default ChatBot;