export class Button {
    
    private readonly btn: HTMLElement | null;

    constructor(id: string){
        this.btn = document.getElementById(id);
    }

    onClick(callback?: () => void){
        callback = callback ? callback : this.defaultHandler;

        this.btn?.addEventListener('click', callback)
    }

    private defaultHandler(): void {
        alert('Hi!')
    }
}