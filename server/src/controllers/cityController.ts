import { Request, Response } from "express";
import { readJSONFile } from "../utils/fileReader";
import { handleError } from "../utils/errorHandler";

const getCityList = async (req: Request, res: Response): Promise<void> => {
  try {
    const city = readJSONFile('cities.json');

    res.status(200).json({
      success: true,
      data: city,
    });
  } catch (err: any) {
    handleError(res, err, 'Get City List');
  }
};

export { getCityList };
