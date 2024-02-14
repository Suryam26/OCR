import { getProcessedImage, tesseractTextRecogniser } from "."

const xyz = async (image: string) => {
  const cases = ['t','ac','def']
  const result = []
  for(const c of cases){
    const processedImage = await getProcessedImage(image, c);
    const res =  await tesseractTextRecogniser(processedImage);
    result.push(res)
    // console.log(">>>",res)
  }
  return result;
}
export default xyz