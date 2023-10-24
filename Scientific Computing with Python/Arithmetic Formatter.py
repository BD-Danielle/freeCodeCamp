def arithmetic_arranger(problems, val=False):
    if len(problems) > 5:
        return "Error: Too many problems."

    
    # list of all operations in str format
    operations = list(map(lambda x: x.split()[1], problems))
    if set(operations) != {'+', '-'} and len(set(operations)) != 2: # set(operations) => {'+', '-'}
        return "Error: Operator must be '+' or '-'."
    
    numbers = []  # list of all operands in str format
    
    for i in problems: # i => "32 + 8"
        p = i.split() # ['32', '+', '8']
        numbers.extend([p[0], p[2]]) # numbers => ['32', '8', '1', '3801', '9999', '9999', '523', '49']
    
    if not all(map(lambda x: x.isdigit(), numbers)):
        return "Error: Numbers must only contain digits."
    
    if not all(map(lambda x: len(x) < 5, numbers)):
        return "Error: Numbers cannot be more than four digits."
    
    top_row = ''
    dashes = ''
    values = list(map(lambda x: eval(x), problems))
    solutions = ''
    for i in range(0, len(numbers), 2): # i => 0, 2, 4, 6
        space_width = max(len(numbers[i]), len(numbers[i+1])) + 2
        top_row += numbers[i].rjust(space_width)
        dashes += '-' * space_width
        solutions += str(values[i // 2]).rjust(space_width)
        if i != len(numbers) - 2:
            top_row += ' ' * 4
            dashes += ' ' * 4
            solutions += ' ' * 4
    
    bottom_row = ''
    for i in range(1, len(numbers), 2):
        space_width = max(len(numbers[i - 1]), len(numbers[i])) + 1
        bottom_row += operations[i // 2] # double backslash operator to perform floor division. 
        bottom_row += numbers[i].rjust(space_width)
        if i != len(numbers) - 1:
            bottom_row += ' ' * 4
    
    if val:
        return '\n'.join((top_row, bottom_row, dashes, solutions))
    else:
        return '\n'.join((top_row, bottom_row, dashes))


print(arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True))