class Category:
    def __init__(self, category):
        self.category = category
        self.ledger = []

    def deposit(self, amount, description=""):
        self.ledger.append({"amount": amount, "description": description})

    def withdraw(self, amount, description=""):
        if self.check_funds(amount):
            self.ledger.append({"amount": -amount, "description": description})
            return True
        return False

    def get_balance(self):
        return sum(item["amount"] for item in self.ledger)

    def transfer(self, amount, budget_category):
        if self.check_funds(amount):
            self.withdraw(amount, f"Transfer to {budget_category.category}")
            budget_category.deposit(amount, f"Transfer from {self.category}")
            return True
        return False

    def check_funds(self, amount):
        return amount <= self.get_balance()

    def __str__(self):
        title = f"{self.category:*^30}\n"
        items = ""
        total = 0
        for item in self.ledger:
            description = item["description"][:23]
            amount = item["amount"]
            total += amount
            items += f"{description}{amount: >7.2f}\n"
        output = title + items + f"Total: {total:.2f}"
        return output


def create_spend_chart(categories):
    chart = "Percentage spent by category\n"
    spendings = [category.get_balance() - sum(item["amount"] for item in category.ledger if item["amount"] > 0) for category in categories]
    total_spent = sum(spendings)
    percentages = [(spending / total_spent * 100) for spending in spendings]

    for i in range(100, -1, -10):
        chart += str(i).rjust(3) + "| "
        for percentage in percentages:
            if percentage >= i:
                chart += "o  "
            else:
                chart += "   "
        chart += "\n"

    chart += "    -" + "---" * len(categories) + "\n"

    max_category_name_length = max(len(category.category) for category in categories)
    for i in range(max_category_name_length):
        chart += "     "
        for category in categories:
            if i < len(category.category):
                chart += category.category[i] + "  "
            else:
                chart += "   "
        chart += "\n"

    return chart

# Example usage:
food = Category("Food")
clothing = Category("Clothing")
entertainment = Category("Entertainment")

food.deposit(1000, "initial deposit")
food.withdraw(10.15, "groceries")
clothing.deposit(500, "initial deposit")
clothing.withdraw(15.89, "restaurant and more")
entertainment.deposit(200, "initial deposit")
food.transfer(50, clothing)

print(food)
print(clothing)
print(entertainment)

categories = [food, clothing, entertainment]
print(create_spend_chart(categories))
