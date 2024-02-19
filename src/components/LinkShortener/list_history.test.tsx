import { render, screen } from "@testing-library/react";
import LinkHistory from "./list_history";
import { LinksInterface } from "../../types";

test("On render, should display the number of links passed as parameters", () => {
  let data: LinksInterface[] = [
    { shorten: "https://shrtlnk.com/23", url: "https://yann.com" },
  ];
  render(<LinkHistory links={data} />);

  const rows = screen.getAllByTestId("link_history_list_testid");

  expect(rows).toHaveLength(data.length);
});
