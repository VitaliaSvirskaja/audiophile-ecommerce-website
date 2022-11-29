interface HeaderState {
  isMenuOpen: boolean;
  isCartOpen: boolean;
}

type HeaderAction =
  | { type: "openCart" }
  | { type: "openMenu" }
  | { type: "close" };

export function headerReducer(
  state: HeaderState,
  action: HeaderAction
): HeaderState {
  switch (action.type) {
    case "openCart":
      return { isMenuOpen: false, isCartOpen: !state.isCartOpen };
    case "openMenu":
      return { isMenuOpen: !state.isMenuOpen, isCartOpen: false };
    case "close":
      return { isMenuOpen: false, isCartOpen: false };
  }
}
