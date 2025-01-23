def measure_rice(target_weight, gram_weight=1):
    
    remaining_weight = target_weight
    weighings = 0

    while remaining_weight > 0:
  
        current_weight = gram_weight
        while current_weight * 2 <= remaining_weight:
            current_weight *= 2  # Увеличиваем вес вдвое

        # Уменьшаем оставшийся вес
        remaining_weight -= current_weight
        weighings += 1

    return weighings

target_weight = 1000  # 1 кг
print(f"Минимальное количество взвешиваний для {target_weight} г: {measure_rice(target_weight)}")
