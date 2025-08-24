import {
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/layouts/table";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "ဒွါဒသမတန်း အင်္ဂလိပ်စာ မိတ်ဆက်ခြင်း",
  description: "Created by Alinn Education",
};
export default function Page() {
  return (
    <div className="w-full">
      <h1 className="text-center py-3 text-3xl font-bold">
        ဒွါဒသမတန်း အင်္ဂလိပ်စာ မိတ်ဆက်ခြင်း
      </h1>
      <table className="table-auto table border-2 w-full text-sm md:text-base">
        <TableHeader>
          <TableRow className="bg-blue-400 dark:bg-blue-500">
            <TableHead>UNIT</TableHead>
            <TableHead>TOPIC</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="bg-yellow-400 dark:bg-yellow-500">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 1
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              GOOD MANNERS
            </TableData>
          </TableRow>
          <TableRow className="bg-yellow-400 dark:bg-yellow-500">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 2
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              KEY TO HAPPINESS
            </TableData>
          </TableRow>
          <TableRow className="bg-yellow-400 dark:bg-yellow-500">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 3
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              DIET AND NUTRITION
            </TableData>
          </TableRow>
          <TableRow className="bg-purple-800 dark:bg-purple-900">
            <TableData align="left" className="pl-3 font-semibold">
              REVIEW 1
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              {" "}
            </TableData>
          </TableRow>
          <TableRow className="bg-gray-700 dark:bg-gray-600">
            <TableData align="left" className="pl-3 font-semibold">
              POEM 1
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              THE LIBRARY
            </TableData>
          </TableRow>
          <TableRow className="bg-green-800 dark:bg-green-600">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 4
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              EMOTIONAL WELL-BEING
            </TableData>
          </TableRow>
          <TableRow className="bg-green-800 dark:bg-green-600">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 5
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              COLOURS
            </TableData>
          </TableRow>
          <TableRow className="bg-green-800 dark:bg-green-600">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 6
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              ARTIFICIAL INTELLIGENCE
            </TableData>
          </TableRow>
          <TableRow className="bg-purple-800 dark:bg-purple-900">
            <TableData align="left" className="pl-3 font-semibold">
              REVIEW 2
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              {" "}
            </TableData>
          </TableRow>
          <TableRow className="bg-gray-700 dark:bg-gray-600">
            <TableData align="left" className="pl-3 font-semibold">
              POEM 2
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              THE QUIET LIFE
            </TableData>
          </TableRow>
          <TableRow className="bg-orange-800 dark:bg-orange-600">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 7
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              POLLUTION: A HAZARD TO OUR ENVIRONMENT
            </TableData>
          </TableRow>
          <TableRow className="bg-orange-800 dark:bg-orange-600">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 8
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              RENEWABLE ENERGY
            </TableData>
          </TableRow>
          <TableRow className="bg-orange-800 dark:bg-orange-600">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 9
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              HELEN KELLER
            </TableData>
          </TableRow>
          <TableRow className="bg-purple-800 dark:bg-purple-900">
            <TableData align="left" className="pl-3 font-semibold">
              REVIEW 3
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              {" "}
            </TableData>
          </TableRow>
          <TableRow className="bg-gray-700 dark:bg-gray-600">
            <TableData align="left" className="pl-3 font-semibold">
              POEM 3
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              THE ROAD NOT TAKEN
            </TableData>
          </TableRow>
          <TableRow className="bg-blue-600 dark:bg-blue-700">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 10
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              WHY IMPROVE COMMUNICATION SKILLS?
            </TableData>
          </TableRow>
          <TableRow className="bg-blue-600 dark:bg-blue-700">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 11
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              A DAY’S WAIT
            </TableData>
          </TableRow>
          <TableRow className="bg-blue-600 dark:bg-blue-700">
            <TableData align="left" className="pl-3 font-semibold">
              Unit 12
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              INTERCULTURAL COMMUNICATION
            </TableData>
          </TableRow>
          <TableRow className="bg-purple-800 dark:bg-purple-900">
            <TableData align="left" className="pl-3 font-semibold">
              REVIEW 4
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              {" "}
            </TableData>
          </TableRow>
          <TableRow className="bg-gray-700 dark:bg-gray-600">
            <TableData align="left" className="pl-3 font-semibold">
              POEM 4
            </TableData>
            <TableData align="left" className="pl-3 font-semibold">
              WINDY NIGHTS
            </TableData>
          </TableRow>
        </TableBody>
      </table>
    </div>
  );
}
