import { ActionContext } from "vuex"
import { Board, BoardState } from "./states"
import { AxiosResponse } from "axios"
import axiosInst from "@/utility/axiosInstance"


export type BoardActions = {
    requestBoardListToSpring(context: ActionContext<BoardState, any>): Promise<void>
}

const actions: BoardActions = {
    async requestBoardListToSpring(context: ActionContext<BoardState, any>): Promise<void> {
        try {
            const res: AxiosResponse<any, any> = await axiosInst.springAxiosInst.get("/board/list")
            const data: Board[] = res.data
            context.commit("REQUEST_BOARD_LIST_TO_SPRING", data)
        } catch (error) {
            console.error("Error fetching board list:", error)
            throw error
        }
    },
}

export default actions