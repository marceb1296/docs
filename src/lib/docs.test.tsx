/* eslint-disable import/export */
import "../mocks/matchMedia.mock"
import { IDocs, IDocsSideNav } from "../interfaces"
import { Docs } from "./"
import { getByRole, queryByRole, queryByText, render, screen } from "../utils"

const title: string = ""

let content: IDocs = {}

let navSide: IDocsSideNav = {}

describe("Docs", () => {
    it("should render", () => {
        render(<Docs content={content} navSide={navSide} title={title}/>)
    }),

    it("should display all key->title from content object in each 'a' element with a key->id as a href into navSide", () => {

        content = {
            testKey: {
                title: "Testing key",
                id: "test-key"
            }
        }

        render(<Docs content={content} navSide={navSide} title={title}/>)

        const getNavElement = screen.getByRole("navigation", {
            name: "side-nav"
        });

        const getAElement = getByRole(getNavElement, "link", {
            name: "Testing key"
        })

        
        expect(getAElement).toHaveAttribute("href")
        expect(getAElement.getAttribute("href")).toEqual("#test-key")

    }),

    it("should exclude all key->title from content object if it's included in key->exclude navSide", () => {

        content = {
            testKey: {
                title: "Testing key",
                id: "test-key"
            },
            testRemoved: {
                title: "Testing key removed"
            }
        }

        navSide = {
            exclude: {
                exclude: ["Testing key removed"]
            }
        }

        render(<Docs content={content} navSide={navSide} title={title}/>)

        const getNavElement = screen.getByRole("navigation", {
            name: "side-nav"
        });

        expect(queryByRole(getNavElement, "link", {
            name: "Testing key removed"
        })).toBeNull()

    }),
    
    it("should display all childs in key->childs from content object in each 'a' element with a key->id as a href into navSide", () => {

        const childs: [id:string, title:string][] = [
            ["hrefChild", "titleChild"],
            ["hrefChild_1", "titleChild_1"],
            ["hrefChild_2", "titleChild_2"]
        ]
        
        content = {
            testKey: {
                title: "Testing key",
                id: "test-key"
            },
            testChilds: {
                title: "Testing key removed"
            }
        }

        navSide = {
            testChilds: {
                childs: childs
            }
        }

        render(<Docs content={content} navSide={navSide} title={title}/>)

        const getNavElement = screen.getByRole("navigation", {
            name: "side-nav"
        });

        childs.forEach(([id, title]) => {
            expect(queryByText(getNavElement, title)).not.toBeNull();
            expect(queryByText(getNavElement, title)?.getAttribute("href")).toEqual("#" + id)
            
        })
    })
})

