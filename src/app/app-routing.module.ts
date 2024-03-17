import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "subpage",
    loadChildren: () =>
      import("./subpage/subpage.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpage2",
    loadChildren: () =>
      import("./subpage2/subpage2.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpage2a",
    loadChildren: () =>
      import("./subpage2a/subpage2a.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpage2b",
    loadChildren: () =>
      import("./subpage2b/subpage2b.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpage2xx",
    loadChildren: () =>
      import("./subpage2xx/subpage2xx.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpage3",
    loadChildren: () =>
      import("./subpage3/subpage3.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpage3a",
    loadChildren: () =>
      import("./subpage3a/subpage3a.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpageShmShP",
    loadChildren: () =>
      import("./subpageShmShP/subpageShmShP.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpageTamar",
    loadChildren: () =>
      import("./subpageTamar/subpageTamar.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpagePrgnRbt",
    loadChildren: () =>
      import("./subpagePrgnRbt/subpagePrgnRbt.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpageComplaint",
    loadChildren: () =>
      import("./subpageComplaint/subpageComplaint.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpagePrgnAnal",
    loadChildren: () =>
      import("./subpagePrgnAnal/subpagePrgnAnal.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpageVeraRobot",
    loadChildren: () =>
      import("./subpageVeraRobot/subpageVeraRobot.module").then(m => m.SubpagePageModule)
  },
  {
    path: "subpageVeraCard",
    loadChildren: () =>
      import("./subpageVeraCard/subpageVeraCard.module").then(m => m.SubpagePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
