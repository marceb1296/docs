/* eslint-disable import/export */
import { IDocs, IDocsSideNav } from "../interfaces"
import "../mocks/matchMedia.mock"
import { fireEvent, render, screen } from "../utils"
import { DocsContext } from "../context"
import { DocsHeader, DocsContainer } from "./"
import { SpyInstance, vi } from "vitest"
import { Signal } from "@preact/signals-react"


const title: string = "Testing Title"
const content: IDocs = {
    test: {
        title: "test",
        data: [
            <h1 style={{height: "300vh"}}>Test</h1>
        ]
    }
}

const navSide: IDocsSideNav = {}

let theme: Signal<boolean> = {value: false} as unknown as Signal<boolean>

// simulate context and useComputed

interface IPositionHandler {
    position: string
    prevPosition: number
    setPosition: (pos: string) => void
}

const positionHandler: IPositionHandler = {
    position: "0",
    prevPosition: 0,
    setPosition: function (pos) {
        positionHandler.position = pos
    },
}

let spyPosition: SpyInstance<[pos: string], void>;

describe("DocsHeader", () => {
    
    beforeAll(() => {
        spyPosition = vi.spyOn(positionHandler, "setPosition")
    })
    
    afterAll(() => {
        vi.restoreAllMocks()
    })
        
    beforeEach(() => {
        
        const scrollHandle = (event: React.UIEvent<HTMLDivElement>) => {
            
            const { scrollTop } = event.currentTarget;
            if (scrollTop > positionHandler.prevPosition) {
                positionHandler.setPosition("-70px")
            } else {
                positionHandler.setPosition("0")
            }
            positionHandler.prevPosition = scrollTop
        }
        
        render(
            <DocsContext.Provider value={{title, content, navTop: positionHandler.position, navSide, theme}}>
                <div data-testid="test-scroll" style={{height: "100vh", overflowY: "auto", width: "100%"}} onScroll={scrollHandle}>
                    <DocsHeader />
                    <DocsContainer />
                    <p></p>
                </div>
            </DocsContext.Provider>
        )
    })
    
    it("should render and have text title", () => {
        expect(screen.queryByText("Testing Title")).not.toBeNull()
    })
    
    it("nav should be present and have the 'top' property set to '0px', when user scroll down should fire the onScrollEvent", () => {
        
        const nav = screen.getByRole("navigation", {
            name: "header-nav"
        });

        expect(nav.style.top).toEqual("0px")

        const elementScrolleable = screen.getByTestId("test-scroll")
        
        fireEvent.scroll(elementScrolleable, {
            target: {
                scrollTop: 200
            }
        })
        
        expect(spyPosition).toHaveBeenCalledTimes(1)
    
    })

    it("nav should have the css property to '.70px' and onScroll should fire two times, when user scroll down and up", () => {
        const nav = screen.getByRole("navigation", {
            name: "header-nav"
        });

        expect(nav.style.top).toEqual("-70px")

        const elementScrolleable = screen.getByTestId("test-scroll")
        
        fireEvent.scroll(elementScrolleable, {
            target: {
                scrollTop: 200
            }
        })
        
        expect(spyPosition).toHaveBeenCalledTimes(2)
    
        fireEvent.scroll(elementScrolleable, {
            target: {
                scrollTop: 100
            }
        })
        
        expect(spyPosition).toHaveBeenCalledTimes(3)
    })
    
    it("nav should back to be in screen with css property to '0'", () => {
        const nav = screen.getByRole("navigation", {
            name: "header-nav"
        });

        expect(nav.style.top).toEqual("0px")

    })
    
})

