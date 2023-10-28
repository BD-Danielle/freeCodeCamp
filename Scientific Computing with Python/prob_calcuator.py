import random

class Hat:
    def __init__(self, **balls):
        self.contents = []
        for ball, count in balls.items():
            self.contents.extend([ball] * count)

    def draw(self, num_balls_to_draw):
        num_balls_to_draw = min(num_balls_to_draw, len(self.contents))
        drawn_balls = random.sample(self.contents, num_balls_to_draw)
        for ball in drawn_balls:
            self.contents.remove(ball)
        return drawn_balls

def experiment(hat, expected_balls, num_balls_drawn, num_experiments): # <__main__.Hat object at 0x1047ca3d0> {'red': 2, 'green': 1} 5 2000
    num_successful_experiments = 0
    for _ in range(num_experiments):
        hat_copy = Hat(**{ball: hat.contents.count(ball) for ball in set(hat.contents)}) # {'red': 4, 'green': 3, 'black': 6}
        drawn_balls = hat_copy.draw(num_balls_drawn)
        drawn_counts = {}
        
        for ball in drawn_balls:
            drawn_counts[ball] = drawn_counts.get(ball, 0) + 1
        
        success = True
        
        for color, count in expected_balls.items():
            if color not in drawn_counts or drawn_counts[color] < count:
                success = False
                break
        
        if success:
            num_successful_experiments += 1

    probability = num_successful_experiments / num_experiments
    return probability

# Example usage:
hat = Hat(black=6, red=4, green=3)
probability = experiment(hat=hat, expected_balls={"red": 2, "green": 1}, num_balls_drawn=5, num_experiments=2000)
print(f"Estimated probability: {probability}") # 0.3695
