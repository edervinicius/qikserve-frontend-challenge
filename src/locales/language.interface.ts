export default interface AppMessages {
  components: {
    header: {
      nav:{
        menu: string;
        login: string;
        contact: string;
      }
    };
    modal: {
      button: string;
      modifierTitle: string;
    }
    searchField: {
      placeholder: string;
    },
    cart:{
      button: string;
      emptyText: string;
      buttonBasket: string;
    }
  };
}
