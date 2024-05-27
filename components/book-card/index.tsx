import { BookCardMain } from "./book-card-main";
import SelectableButtonGroup from "./selectable-button-group";

export const BookCard = Object.assign(BookCardMain, {
  ButtonGroup: SelectableButtonGroup,
});
