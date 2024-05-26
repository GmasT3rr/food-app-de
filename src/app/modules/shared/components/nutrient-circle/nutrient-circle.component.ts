import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-nutrient-circle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nutrient-circle.component.html',
  styleUrl: './nutrient-circle.component.scss',
})
export class NutrientCircleComponent implements OnChanges {
  @Input() calories?: number | string;
  @Input() showKcalSpan: boolean = false;
  @Input() nutrients!: {
    protein?: number | string;
    carbs?: number | string;
    fats?: number | string;
    [key: string]: string | number | undefined; // Index signature
  };
  segments: any[] = [];
  margin = 4;

  ngOnChanges() {
    if (!this.nutrients) return;

    // Remove "kcal" from calories
    if (typeof this.calories === 'string') {
      this.calories = parseFloat(this.calories.replace('kcal', '').trim());
    }

    // Remove "g" from nutrients
    for (const key of Object.keys(this.nutrients)) {
      const value = this.nutrients[key];
      if (typeof value === 'string') {
        this.nutrients[key] = parseFloat(value.replace('g', '').trim());
      }
    }
    
    const total =
      Number(this.nutrients.protein) +
      Number(this.nutrients.carbs) +
      Number(this.nutrients.fats);

    const marginCount = [
      this.nutrients.protein,
      this.nutrients.carbs,
      this.nutrients.fats,
    ].filter((nutrient) => (nutrient as number) > 0).length;

    const totalMargins = this.margin * marginCount;
    const effectiveTotal = 100 - totalMargins;

    const percentages = {
      protein: (Number(this.nutrients.protein) / total) * effectiveTotal,
      carbs: (Number(this.nutrients.carbs) / total) * effectiveTotal,
      fats: (Number(this.nutrients.fats) / total) * effectiveTotal,
    };

    let cumulativePercentage = 0;
    const colors = ['#FF5722', '#448AFF', '#FFD740'];
    // --proteins:#FF5722;
    // --carbs:#448AFF;
    // --fats:#FF9800;

    this.segments = Object.keys(percentages)
      .map((key, index) => {
        const percentage = percentages[key as keyof typeof percentages];
        if (percentage === 0) return null;

        const dasharray = `${percentage} ${100 - percentage}`;
        const dashoffset = 100 - cumulativePercentage;
        cumulativePercentage += percentage + this.margin;

        return {
          color: colors[index],
          percentage,
          dasharray,
          dashoffset,
        };
      })
      .filter((segment) => segment !== null); // Filter out null segments
  }

}
