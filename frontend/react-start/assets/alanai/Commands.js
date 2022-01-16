intent('Hello world', p => {
    p.play('Hi there');
});

intent("(open|view) (the|my) calendar", p => {
       p.play({ command: 'open-calendar'})
})

intent("(close) (the|my) calendar", p => {
       p.play({ command: 'close-calendar'})
})

intent("(open|view) (the|my) music", p => {
       p.play({ command: 'open-music'})
})

intent("(close) (the|my) music", p => {
       p.play({ command: 'close-music'})
})

intent("(open|view) (the|my) timeline", p => {
       p.play({ command: 'open-timeline'})
})

intent("(close) (the|my) timeline", p => {
       p.play({ command: 'close-timeline'})
})

intent("(open|view) (the|my) meditate", p => {
       p.play({ command: 'open-meditate'})
})

intent("(close) (the|my) meditate", p => {
       p.play({ command: 'close-meditate'})
})


intent("I want to add a reminder", async p => {
    p.play("Sounds good! What do you want to add?");
    const reminder = await p.then(userInput);
    p.play({command: "reminder", value: reminder});
    p.play(`${reminder} has been added`);
})

const userInput = context(() => {
    intent("$(I* .+)", p => p.resolve(p.I));
})

intent(`I have a $(type_class* (.*)) (on|) $(DATE) (at|) $(TIME)`, p => {
    p.play(`Adding to your schedule: Reminder ${p.type_class.value} class on ${p.DATE} at ${p.TIME}`)
    p.play({command: 'update_class', class: p.type_class.value, date: p.DATE, time: p.TIME})
})