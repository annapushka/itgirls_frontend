# SOLID

## Single responsibility principle (SRP)
This principle states that software component (function, class or module) should 
focus on one unique tasks (have only one responsibility).

<p><img src="img/S.png" alt="S" width="300px"/></p>

    class Person {
        public name: string;
        public email: string;
        constructor(name: string, email: string) {
            this.name = name;
            if (this.validateEmail(email)) {
                this.email = email;
            } else {
                throw new Error("Invalid email!");
            }
        }
        validateEmail(email: string) {
            return Boolean
        }
    }

Класс Person содержит метод валидации электронной почты, что можно вынести в отдельный класс. 
В дальнейшем, правила валидации можно менять, что не повлияет на класс Person.

    class Person {
        public name: string;
        public email: Email;
        constructor(name: string, email: Email) {
            this.email = email;
            this.name = name;
        }
    }

    class Email {
        public email: string;
        constructor(email: string) {
            if (this.validateEmail(email)) {
                this.email = email;
            } else {
                throw new Error("Invalid email!");
            }
        }
        validateEmail(email: string) {
            return Boolean
        }
    }

## Open/closed principle (OCP)
This principle states that software entities should be designed with the 
application growth (new code) in mind (be open to extension), but the application growth should require the smaller 
amount of changes to the existing code as possible (be closed for modification).

<p><img src="/img/O.png" alt="O" width="300px"/></p>

    class GreetingService {
        language: string;
        constructor(language: string) {
            this.language = language;
        }
        execute(): string {
            switch (this.language) {
                case "en": {
                    return "Hello";
                }
                case "es": {
                    return "Hola";
                }
                case "fr": {
                    return "Bonjour";
                }
                default:
                    return "";
            }
        }
    }

Недостаток этого кода в том, что каждый раз, когда мы хотим добавить или удалить язык из списка,
мы должны соответствующим образом модифицировать инструкцию. Постоянная модификация добавляет
дополнительные усилия и риск, когда негативно влияет на зависимый код, требуя больше времени и усилий 
для отладки и исправления ошибок. Решением этой проблемы является использование абстракций.

    interface LanguageProvider {
        greet(): string;
    }

    class EnLanguageProvider implements LanguageProvider {
        greet(): string {
            return "Hello";
        }
    }
    class GreetingService {
        languageProvider: LanguageProvider;
        constructor(languageProvider: LanguageProvider) {
            this.languageProvider = languageProvider;
        }
        execute(): string {
            return this.languageProvider.greet();
        }
    }

## Liskov substitution principle (LSP)
This principle states that we should be able to replace a class in a program 
with another class as long as both classes implement the same interface. After replacing the class no other changes should 
be required and the program should continue to work as it did originally.

<p><img src="/img/L.png" alt="L" width="300px"/></p>

Если предположить, что каждая  Bird может fly — это работает для Duck, но не для Straus — следовательно, 
это нарушение принципа.

    class Bird {
        public fly() {}
    }

    class Duck extends Bird {}

    class Straus extends Bird { // ===> Нарушение LSP! 
    }

Решение в данном случае – выделить отдельный класс летающих птиц.
Данный производный класс FlyingBird взаимозаменяем для своего базового/родительского класса Bird.

    class Bird {}

    class FlyingBird extends Bird {
        public fly() {}
    }

    class Duck extends FlyingBird {}

    class Straus extends Bird1 {}


## Interface segregation principle (ISP)
This principle states that we should split interfaces which are 
very large (general-purpose interfaces) into smaller and more specific ones (many client-specific interfaces) 
so that clients will only have to know about the methods that are of interest to them.

<p><img src="/img/I.png" alt="I" width="300px"/></p>

    interface IVehicle {
        getSpeed(): number;
        getVehicleType: string;
        isTaxPayed(): boolean;
        isLightsOn(): boolean;
        isLightsOff(): boolean;
        startEngine(): void;
        acelerate(): number;
        stopEngine(): void;
        startRadio(): void;
        playCd(): void;
        stopRadio(): void;
    }

Выше представлен один универсальный интерфейс для управления всеми элементами в транспортном средстве. 
Если предположить, что будет класс клиента, для которого потребуется взаимодействие только с определённой 
частью из данного интерфейса, тогда мы получим нарушение принципа. Решение разделить интерфейс IVehicle на множество клиентских интерфейсов.

    interface IVehicle {
        getSpeed(): number;
        getVehicleType: string;
        isTaxPayed(): boolean;
        isLightsOn(): boolean;
    }

    interface ILights {
        isLightsOn(): boolean;
        isLightsOff(): boolean;
    }

    interface IRadio {
        startRadio(): void;
        playCd(): void;
        stopRadio(): void;
    }

    interface IEngine {
        startEngine(): void;
        acelerate(): number;
        stopEngine(): void;
    }

## Dependency inversion principle (DIP)
This principle states that entities should depend on abstractions (interfaces) as 
opposed to depend on concretion (classes).

<p><img src="/img/D.png" alt="D" width="300px"/></p>

Предположим, что класс Auth должен отправлять уведомление всякий раз, когда пользователь входит в систему. 
Высокоуровневый класс — это класс аутентификации, а низкоуровневый класс — это класс Alert.

    class Authentication {
        login() {
            const alert = new Alert();
            alert.send()

            console.log('User logged in')
        }

        logout() {

        }
    }

    class Alert {
        send() {
            console.log('Notification sent')
        }
    }

Как сделать код менее жестким? Добавить абстрактный интерфейс. 

    class Authentication {
        login(alert: IAlert) {
            alert.send()

            console.log('User logged in')
        }

        logout() {

        }
    }

    interface IAlert {
        send(): void
    }

    class Alert implements IAlert {
        send(): void {
            console.log('Notification sent')
        }
    }
