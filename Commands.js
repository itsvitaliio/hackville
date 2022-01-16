intent('Hello world', p => {
    p.play('Hi there');
});

intent("(open|view) (the|my) schedule", p => {
       p.play({ command: 'open-schedule'})
})

intent("(close) (the|my) schedule", p => {
       p.play({ command: 'close-schedule'})
})

intent("(open|view) (the|my) schedule", p => {
       p.play({ command: 'close-schedule'})
})

intent("(close) (the|my) schedule", p => {
       p.play({ command: 'close-schedule'})
})

intent("I want to add a reminder", async p => {
    p.play("Sounds good! What do you want to add?");
    const reminder = await p.then(userInput);
    p.play({command: "reminder", value: reminder});
    p.play(`${reminder} has been added, I added ${reminder} to your schedule`);
})

const userInput = context(() => {
    intent("$(I* .+)", p => p.resolve(p.I));
})

intent(`I have a $(type_class* (.*)) (on|) $(DATE) (at|) $(TIME)`, p => {
    p.play(`Adding to your schedule: Reminder ${p.type_class.value} class on ${p.DATE} at ${p.TIME}`)
    p.play({command: 'update_class', class: p.type_class.value, date: p.DATE, time: p.TIME})
})
