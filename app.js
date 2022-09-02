const addHabits = document.querySelector(".add-habit");
const habitsList = document.querySelector(".habits");
const habits = [];

// Add a habit
function addHabit(e) {
    e.preventDefault();
    const text = this.querySelector("[name=habit]").value;
    const totalCounts = this.querySelector("[name=reps]").value;
    const timeframe = this.querySelector("[name=timeframe]").value;
    const habit = {
        text: text,
        reps: 0,
        totalCounts: totalCounts,
        timeframe: timeframe,
        completed: false,
    }
    habits.push(habit);
}

// List habit
function listHabits(habit = [], habitsList){
    habitsList.innerHTML = habits.map((habit, i) => {
        return `      
            <li>
            <input type="checkbox" data-index=${i} id="habit${i}" ${habit.completed ? "checked" : ""} }/>
            <label for="habit${i}">${habot.reps}/${habit.totalCount} ${habit.timeframe} <span>${habit.text}</span></label>
            </li>
        `
    })
}


// Toggle if complete

// Delete habit

addHabits.addEventListener("submit", addHabit);