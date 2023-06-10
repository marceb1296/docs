import { RenderResult, render, screen } from "../utils"
import { DocsCode, DocsTableStatus, DocsTableTypes, DocsTableView } from "./"

const body: (string | React.ReactNode)[][] = [[
    "Testing Table"
]]
const bodyChildren = <p>Test Children</p>

let ui: RenderResult<typeof import("/home/marceh/projects/docs/node_modules/@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;

describe("should render four table", () => {
    
    beforeEach(() => {
        ui = render(
            <div style={{display: "flex", flexDirection: "column"}}>
                <DocsTableStatus body={body}></DocsTableStatus>
                <DocsTableTypes body={body}></DocsTableTypes>
                <DocsCode >
                    {bodyChildren}
                </DocsCode>
                <DocsTableView body={body}></DocsTableView>
            </div>
        )
    })


    it("should render 3 tables and one pre element", async () => {        
        expect(screen.getAllByRole("table")).toHaveLength(3)
        expect(screen.getByText("Test Children")).toBeInTheDocument()
    })
})