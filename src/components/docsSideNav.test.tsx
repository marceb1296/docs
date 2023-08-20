import { DocsSideNav } from "./";
import "../mocks/matchMedia.mock";
import { fireEvent, render, screen } from "../utils";
import { DocsHeaderContext } from "../context";
import { DocsContext } from "../context";
import { IDocs, IDocsSideNav } from "../interfaces";
import { Signal } from "@preact/signals-react";
import { SpyInstance, vi } from "vitest"

let menu: Signal<boolean> = { value: false } as unknown as Signal<boolean>
let theme: Signal<boolean> = { value: false } as unknown as Signal<boolean>
const title: string = "Testing Title"
const content: IDocs = {}
const navSide: IDocsSideNav = {}

// handle position, simulate useContext

interface IPositionHandler {
    position: string
    setPosition: () => void
}

const positionHandler: IPositionHandler = {
    position: "0",
    setPosition: function () {
        menu.value = !menu.value
        if (positionHandler.position === "0") {
            positionHandler.position = "-100vh"
            return
        }
        positionHandler.position = "0"
    },
}

let spyPosition: SpyInstance<[], void>;


describe("DocSideNav", () => {

    beforeAll(() => {
        spyPosition = vi.spyOn(positionHandler, "setPosition")
    })

    afterAll(() => {
        vi.restoreAllMocks()
    })

    beforeEach(() => {
        render(
            <DocsContext.Provider value={{ title, content, navTop: "0", navSide, theme }}>
                <DocsHeaderContext.Provider value={{ position: positionHandler.position, menu }}>
                    <header>
                        <nav aria-label="header-nav" style={{ transform: `translateX(0)` }} className="nav-doc-container">
                            <span>
                                {title}
                            </span>
                            <div aria-label="test-hide-nav" role="button" onClick={positionHandler.setPosition} className={menu.value ? "menu active" : "menu"}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </nav>
                    </header>
                    <DocsSideNav />
                </DocsHeaderContext.Provider>
            </DocsContext.Provider>
        )
    })

    test("Should render", () => {
        expect(screen.queryByRole("navigation", {
            name: "header-nav"
        })).not.toBeNull()
    })

    test("should move navside out of the screen by set transform(-100%) when user clicks on header nav button", async () => {

        const getNavSide = screen.getByRole("complementary", {
            name: "side-nav"
        })

        expect(getNavSide.style.transform).toEqual("translateX(0)")

        const hideNav = screen.getByRole("button", {
            name: "test-hide-nav"
        })
        expect(hideNav.className).toEqual("menu")

        fireEvent.click(hideNav)

        expect(spyPosition).toHaveBeenCalledTimes(1)
    })

    test("side-nav now should have transform(-100%) and mock called two times after click it again", () => {

        const getNavSide = screen.getByRole("complementary", {
            name: "side-nav"
        })
        expect(getNavSide.style.transform).toEqual("translateX(-100vh)")

        const hideNav = screen.getByRole("button", {
            name: "test-hide-nav"
        })
        expect(hideNav.className).toEqual("menu active")

        fireEvent.click(hideNav)

        expect(spyPosition).toHaveBeenCalledTimes(2)

    })

    test("side-nav should be again in screen with transform(0)", () => {

        const getNavSide = screen.getByRole("complementary", {
            name: "side-nav"
        })
        expect(getNavSide.style.transform).toEqual("translateX(0)")

    })

})