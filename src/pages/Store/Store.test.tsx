import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Store from "./Store";
import products from "../../../public/products.json";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockFetch = (data: any) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => data,
    })
  ) as jest.Mock;
};

const mockAxiosPost = (data: any) => {
  mockedAxios.post.mockResolvedValue({ data });
};

describe("Store Component", () => {
  beforeAll(() => {
    mockAxiosPost(products);
    mockFetch(products);
  });
  
  test("Renders the main page", () => {
    render(<Store />);
  });

});
