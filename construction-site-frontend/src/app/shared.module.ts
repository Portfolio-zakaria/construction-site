import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { TranslateModule } from '@ngx-translate/core'

// acl
import { ACLComponent } from 'src/app/components/cleanui/layout/ACL/acl.component'

// antd components module
import { AntdModule } from 'src/app/antd.module'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

const MODULES = [CommonModule, RouterModule, AntdModule, TranslateModule]

@NgModule({
  imports: [...MODULES],
  declarations: [ACLComponent],
  exports: [...MODULES],
})
export class SharedModule {}
