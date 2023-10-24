def add_time(start_time, duration, starting_day=None):
    # Define a list of days of the week for later use
    days_of_week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    # Split the start_time to extract hours and minutes
    start_time, meridian = start_time.split()
    start_hours, start_minutes = map(int, start_time.split(':')) # 3 0
    
    # Split the duration to extract hours and minutes
    duration_hours, duration_minutes = map(int, duration.split(':')) # 3 10

    # Convert start_time to 24-hour format
    if meridian == "PM":
        start_hours += 12

    # Calculate the total minutes
    total_minutes = start_hours * 60 + start_minutes + duration_hours * 60 + duration_minutes

    # Calculate the new time
    new_hours = total_minutes // 60
    new_minutes = total_minutes % 60

    # Calculate the number of days later
    days_later = new_hours // 24

    # Convert new_hours to 12-hour format
    if new_hours % 24 < 12:
        new_meridian = "AM"
        if new_hours % 12 == 0:
            new_hours = 12
        else:
            new_hours %= 12
    else:
        new_meridian = "PM"
        if new_hours % 12 == 0:
            new_hours = 12
        else:
            new_hours %= 12

    # Determine the day of the week if a starting day is given
    if starting_day: # if starting_day is true
        starting_day = starting_day.lower().capitalize() # first go lower and then go capitalize => Tuesday
        starting_index = days_of_week.index(starting_day)
        new_day_index = (starting_index + days_later) % 7
        new_day = days_of_week[new_day_index]

    # Construct the result string
    result = f"{new_hours:02d}:{new_minutes:02d} {new_meridian}" # result_str => 12:03 AM
    if days_later == 1:
        result += " (next day)"
    elif days_later > 1:
        result += f" ({days_later} days later)"
    
    if starting_day: # if starting_day is true
        result += f", {new_day}"

    return result

# print(add_time("3:00 PM", "3:10"))  # 6:10 PM
# print(add_time("11:30 AM", "2:32", "Monday"))  # 2:02 PM, Monday
# print(add_time("11:43 AM", "00:20"))  # 12:03 PM
# print(add_time("10:10 PM", "3:30"))  # 1:40 AM (next day)
print(add_time("11:43 PM", "24:20", "tueSday"))  # 12:03 AM, Thursday (2 days later)
# print(add_time("6:30 PM", "205:12"))  # 7:42 AM (9 days later)