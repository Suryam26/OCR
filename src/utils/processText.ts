interface BoundingBox {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

interface Baseline {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  has_baseline: boolean;
}

interface LineData {
  "bounding-box": BoundingBox;
  "baseline": Baseline;
  "confidence": number;
  "text": string;
}

// function combineLinesWithinGroup(group: LineData[]): LineData {
//   // Prioritize by Confidence
//   var bestLine = group.reduce((acc: LineData, line: LineData) => 
//     (acc.confidence > line.confidence) ? acc : line, group[0] 
//   );

//   // Optional: Baseline Refinement (If confidence scores are close)
//   // ... (Add a condition to enable baseline refinement as needed) ... {
//     const baselineY = bestLine.baseline.y0; 
//     const baselineTolerance = 5; 

//     const refinedGroup = group.filter(line => 
//         Math.abs(line.baseline.y0 - baselineY) <= baselineTolerance
//     );

//     if (refinedGroup.length > 1) {
//       bestLine = refinedGroup.reduce((acc: LineData, line: LineData) => 
//         (acc.confidence > line.confidence) ? acc : line, refinedGroup[0] 
//       ); 
//     }
//   // ... } (End of refinement section)

//   return bestLine; 
// }

// function doBoundingBoxesOverlap(line1: LineData, line2: LineData, threshold: number): boolean {
//   // Implement your bounding box overlap logic here
//   // Example with basic axis overlap and tolerance: 
//   return Math.abs(line1["bounding-box"].x0 - line2["bounding-box"].x0) < threshold;
// }

// function doesLineOverlapGroup(line: LineData, group: LineData[], threshold: number): boolean {
//   return group.some(existingLine => doBoundingBoxesOverlap(line, existingLine, threshold));
// }
// function groupLinesByProximity(lines: LineData[]): LineData[][] {
//   const groups: LineData[][] = [];
//   const overlapThreshold = 10;

//   lines.forEach(line => {
//     const matchingGroup = groups.find(group => doesLineOverlapGroup(line, group, overlapThreshold));
    
//     if (matchingGroup) {
//       matchingGroup.push(line);
//     } else {
//       groups.push([line]);
//     }
//   });

//   return groups;
// }

// const processText = (ocrResults: LineData[]) => {

//   console.log('>>>',ocrResults)
//   const allLines: LineData[] = ocrResults.flatMap(result => result);
//   console.log('allLines', allLines)
//   const lineGroups = groupLinesByProximity(allLines);
//   console.log('lineGroups', lineGroups)
//   const combinedText = lineGroups.map(group => combineLinesWithinGroup(group));
//   console.log('combinedText', combinedText)
//   return combinedText;
// }

function calculateIOU(box1: BoundingBox, box2: BoundingBox): number {
  const xOverlap = Math.max(0, Math.min(box1.x1, box2.x1) - Math.max(box1.x0, box2.x0));
  const yOverlap = Math.max(0, Math.min(box1.y1, box2.y1) - Math.max(box1.y0, box2.y0));
  const intersectionArea = xOverlap * yOverlap;

  // Calculate union area
  const box1Area = (box1.x1 - box1.x0) * (box1.y1 - box1.y0);
  const box2Area = (box2.x1 - box2.x0) * (box2.y1 - box2.y0);
  const unionArea = box1Area + box2Area - intersectionArea;

  return intersectionArea / unionArea; 
  // ... (Identical to the IOU calculation function provided earlier) ...
}

function doesOverlap(line1: LineData, line2: LineData, threshold: number): boolean {
  return calculateIOU(line1["bounding-box"], line2["bounding-box"]) >= threshold;
}

function processText(lines: LineData[], overlapThreshold: 5): LineData[] {
  const filteredLines: LineData[] = [];

  lines.forEach(line => {
    // Find if the current line overlaps with any existing lines 
    // in the filteredLines array
    const overlaps = filteredLines.some(existingLine => 
      doesOverlap(line, existingLine, overlapThreshold)
    );

    if (!overlaps) {
      // No overlap, directly add to filtered lines
      filteredLines.push(line);
    } else {
      // Overlap found - find the overlapping line with highest confidence
      const overlappingLine = filteredLines.find(existingLine => 
       doesOverlap(line, existingLine, overlapThreshold)
      )!; // We already know an overlapping line exists

      if (line.confidence > overlappingLine.confidence) {
         // The current line has higher confidence - replace in filteredLines
         const lineIndex = filteredLines.indexOf(overlappingLine);
         filteredLines[lineIndex] = line;
      }
    }
  });

  return filteredLines;
}

export default  processText