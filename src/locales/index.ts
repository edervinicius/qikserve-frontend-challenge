import AppMessages from "./language.interface";

const messages: Record<string, AppMessages> = {
  "pt-BR": {
    components: {
      header: {
         nav: {
          menu: "Menu",
          contact: "Contato",
          login: "Entrar"
         }
      },
      modal:{
        button: "Adicionar ao pedido",
        modifierTitle: "Selecione {e} opção"
      },
      searchField:{
        placeholder: "Buscar por items do menu"
      },
      cart:{
        button: "Finalizar pedido",
        emptyText: "Seu carrinho está vazio",
        buttonBasket:"Seu carrinho • {e} item"
      }
    }
  },
  "en-US": {
    components: {
      header: {
         nav: {
          menu: "Menu",
          contact: "Contact",
          login: "Login"
         }
      },
      modal:{
        button: "Add to order",
        modifierTitle: "Select {e} option"
      },
      searchField:{
        placeholder: "Search menu items"
      },
      cart:{
        button: "Checkout now",
        emptyText: "Your shopping cart is empty",
        buttonBasket:"Your basket • {e} item"
      }
    }
  },
};

export default messages;
