class User1 {
    name: string;
    age: number;

    constructor();
    constructor(name: string);
    constructor(age: number);
    constructor(name: string, age: number);
    constructor(ageOrName?: string | number, age?: number) {
        if(typeof ageOrName === 'string') {
            this.name = ageOrName;
        } else if(typeof ageOrName === 'number') {
            this.age = ageOrName;
        }
        if(typeof age === 'number') {
            this.age = age;
        }
    }
}

class User2 {
    skills: string[];

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if (Array.isArray(skillOrSkills)) {
            this.skills.concat(skillOrSkills);
        } else {
            this.skills.push(skillOrSkills);
        }
    }

}

class User3 {
    _login: string;
    password: string;

    set login(login: string) {
        this._login = `user-${login}`;
    }

    get login() {
        return this._login;
    }
}
