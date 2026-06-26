class Course {
    channel: string
    course: string

    constructor(channel: string, course: string) {
        this.channel = channel
        this.course = course
    }
}

let c1 = new Course('CFB', 'Typescript')
console.log(c1.channel)
console.log(c1.course)