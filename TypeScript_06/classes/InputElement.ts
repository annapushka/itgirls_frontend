import { Component } from "./Component";
import { validate } from "../helpers";
import { Validation } from "../types";
import { goalsState } from "./GoalsState";

export class InputElement extends Component<HTMLDivElement, HTMLFormElement> {
  titleUnputElement: HTMLInputElement;
  descriptionUnputElement: HTMLInputElement;
  reateUnputElement: HTMLInputElement;
  typeInput: "goal" | "achievement";

  constructor() {
    super("solar-system", "universal", true, "planet");
    this.titleUnputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionUnputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.reateUnputElement = this.element.querySelector(
      "#reate"
    ) as HTMLInputElement;
    this.typeInput = "goal";
    this.configure();
  }
  configure() {
    this.element.addEventListener("submit", this.submitHandler.bind(this));
  }

  renderContent(): void {}

  private submitHandler(event: SubmitEvent) {
    event.preventDefault();
    const userInput = this.getUserInput();
    const goalType = event.submitter?.id;
    if (Array.isArray(userInput) && goalType) {
      const [title, desc, reate] = userInput;
      goalsState.addGoal(title, desc, reate, goalType);
      this.clearInputs();
    }
  }

  private getUserInput(): [string, string, number] | void {
    const validateTitle: Validation = {
      value: this.titleUnputElement.value,
      min: 5,
      max: 20,
    };
    const validateDescription: Validation = {
      value: this.descriptionUnputElement.value,
      min: 5,
      max: 200,
    };
    const validateReate: Validation = {
      value: +this.reateUnputElement.value,
      min: 1,
      max: 5,
    };
    if (
      !validate(validateTitle) ||
      !validate(validateDescription) ||
      !validate(validateReate)
    ) {
      return alert("Invalid input");
    } else {
      const titleInput = this.titleUnputElement.value;
      const descriptionInput = this.descriptionUnputElement.value;
      const reateInput = +this.reateUnputElement.value;

      return [titleInput, descriptionInput, reateInput];
    }
  }
  private clearInputs() {
    this.titleUnputElement.value = "";
    this.descriptionUnputElement.value = "";
    this.reateUnputElement.value = "";
  }
}
