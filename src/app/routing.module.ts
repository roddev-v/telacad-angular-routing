import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ComponentAComponent as ComponentA } from "./components/component-a/component-a.component";
import { ComponentBComponent as ComponentB } from "./components/component-b/component-b.component";
import { ComponentCComponent as ComponentC } from "./components/component-c/component-c.component";

const routes: Routes = [
  { path: "", component: ComponentA },
  { path: "component-b", component: ComponentB },
  { path: "component-c", component: ComponentC },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class RoutingModule {}
