import pandas as pd


# Load the dataset into a Pandas DataFrame
data = pd.read_csv("demographic_data_analyzer.csv")

# Question 1: How many people of each race are represented in this dataset?
race_count = data["race"].value_counts()

# Question 2: What is the average age of men?
average_age_men = data[data["sex"] == "Male"]["age"].mean()

# Question 3: What is the percentage of people who have a Bachelor's degree?
percentage_bachelors = (data["education"] == "Bachelors").mean() * 100

# Question 4: What percentage of people with advanced education make more than 50K?
advanced_education = data["education"].isin(["Bachelors", "Masters", "Doctorate"])
higher_education_rich = (data[advanced_education]["salary"] == ">50K").mean() * 100

# Question 5: What percentage of people without advanced education make more than 50K?
lower_education = ~advanced_education
lower_education_rich = (data[lower_education]["salary"] == ">50K").mean() * 100

# Question 6: What is the minimum number of hours a person works per week?
min_work_hours = data["hours-per-week"].min()

# Question 7: What percentage of people who work the minimum number of hours per week have a salary of more than 50K?
num_min_workers = data[data["hours-per-week"] == min_work_hours]
if len(num_min_workers) > 0:
    rich_percentage = (num_min_workers["salary"] == ">50K").mean() * 100
else:
    rich_percentage = 0  # Handle the case of an empty sequence

# Question 8: What country has the highest percentage of people that earn >50K and what is that percentage?
country_earnings = (data[data["salary"] == ">50K"]["native-country"].value_counts(normalize=True))
if not country_earnings.empty:
    highest_earning_country = country_earnings.idxmax()
    highest_earning_country_percentage = country_earnings.max() * 100
else:
    highest_earning_country = "N/A"  # Handle the case of an empty sequence
    highest_earning_country_percentage = 0

# Question 9: Identify the most popular occupation for those who earn >50K in India.
indian_occupation_stats = data[(data["native-country"] == "India") & (data["salary"] == ">50K")]
if not indian_occupation_stats.empty:
    top_IN_occupation = indian_occupation_stats["occupation"].mode()[0]
else:
    top_IN_occupation = "N/A"  # Handle the case of an empty sequence

# Print the results
print("Question 1:", race_count)
print("Question 2:", round(average_age_men, 1))
print("Question 3:", round(percentage_bachelors, 1))
print("Question 4:", round(higher_education_rich, 1))
print("Question 5:", round(lower_education_rich, 1))
print("Question 6:", min_work_hours)
print("Question 7:", round(rich_percentage, 1))
print("Question 8:", highest_earning_country, round(highest_earning_country_percentage, 1))
print("Question 9:", top_IN_occupation)