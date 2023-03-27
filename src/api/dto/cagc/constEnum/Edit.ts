/*
/*\_________________________________________________________________________________________________
|*												说明											     __≣|
|* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
|*      此代码由VM模板自动生成																	    |
|*		版本:v0.0.0.1                                                                            |___
|*		日期:2022-07-04 16:16:50                                                                    ≣|
|*																	create by    LCTR              ≣|
|*																	generate by  admin             ≣|
|* ________________________________________________________________________________________________≣|
**/

/**
 * 常量/枚举业务模型
 * <p>Edit</p>
 *
 * @author admin
 * @date 2022-07-04
 */
export interface Edit {
  /**
   * Id
   */
  id: string;

  /**
   * 类型（enum,const）
   */
  type: string;

  /**
   * 所属模块名称
   */
  moduleName: string;

  /**
   * 名称
   */
  name: string;

  /**
   * 描述
   */
  description: string;

  /**
   * 备注
   */
  remark: string;
}
