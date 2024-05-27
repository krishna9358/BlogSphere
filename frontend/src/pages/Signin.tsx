import { Auth } from "../components/Auth";
import { Quote } from "../components/Quotes";

export function Signin() {
  return <div className="w-full h-screen">
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1"> <Auth /> </div>
      <div className="hidden lg:block flex-1"> <Quote /> </div>
    </div>
  </div>
}