export class UserForm {
  constructor(public parent: Element) {}

  onButtonClick(): void {
    console.log("Clicked Me!");
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <input />
            <button>Click Me</button>
        </div>
    `;
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.parent.append(templateElement.content);
  }
}
